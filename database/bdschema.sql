-- SCHEMA: bdschema

DROP SCHEMA IF EXISTS bdschema CASCADE;
DROP DOMAIN IF EXISTS typeDeMisEnPlace CASCADE;

CREATE DOMAIN typeDeMisEnPlace AS VARCHAR(30)
	CHECK (VALUE IN ('type1', 'type2', 'type3'));
	
CREATE SCHEMA IF NOT EXISTS bdschema
    AUTHORIZATION postgres;

CREATE TABLE IF NOT EXISTS bdschema.TypeSol(
	type_ VARCHAR(20) NOT NULL,
	PRIMARY KEY (type_)
);

CREATE TABLE IF NOT EXISTS bdschema.Jardin(
	jardinId VARCHAR(10) NOT NULL,
	typeSol VARCHAR(20) NOT NULL,
	nom VARCHAR(20) NOT NULL,
	surface SMALLINT NOT NULL,
	estPotager BOOLEAN NOT NULL,
	estVerger BOOLEAN NOT NULL,
	hauteurMax SMALLINT DEFAULT NULL, /* seulement pour jardinVerger */
	estOrnement BOOLEAN,
	PRIMARY KEY (jardinId),
    FOREIGN KEY (typeSol) REFERENCES bdschema.TypeSol(type_)
		ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE OR REPLACE FUNCTION verify_max_hauteur() RETURNS TRIGGER AS $verify_max_hauteur$
    BEGIN
		IF NEW.estVerger IS NOT true AND NEW.hauteurMax IS NOT NULL THEN
        		RAISE EXCEPTION 'hauteur max only available when estVerger is true';
    	END IF;
		RETURN NEW;
	END;
    $verify_max_hauteur$
    LANGUAGE plpgsql;
        

CREATE OR REPLACE TRIGGER  contenuRangModification 
	BEFORE INSERT OR UPDATE ON bdschema.Jardin
	FOR ROW EXECUTE FUNCTION verify_max_hauteur();

CREATE TABLE IF NOT EXISTS bdschema.Semencier(
	semencierId VARCHAR(10) NOT NULL,
	nom VARCHAR(20) NOT NULL,
	siteWeb TEXT NOT NULL,
	PRIMARY KEY (semencierId)
);

CREATE TABLE IF NOT EXISTS bdschema.Variete(
	nom VARCHAR(30) NOT NULL,
	anneeDeMiseEnMarche SMALLINT NOT NULL CHECK (anneeDeMiseEnMarche > 0),
	descriptionsSemis TEXT NOT NULL,
	plantation VARCHAR(50) NOT NULL,
	entretien VARCHAR(50) NOT NULL,
	recolte VARCHAR(50) NOT NULL,
	periodeMiseEnPlace VARCHAR(10) NOT NULL,
	periodeRecolte  VARCHAR(10) NOT NULL,
	commentaireGenerale TEXT,
	PRIMARY KEY (nom)
);

CREATE TABLE IF NOT EXISTS bdschema.Plante(
	planteId VARCHAR(10) NOT NULL,
	nomLatin VARCHAR(20) NOT NULL,
	nomVariete VARCHAR(30) NOT NULL,
	nom VARCHAR(30) NOT NULL,
    categorie VARCHAR(20) NOT NULL,
    type_ VARCHAR(20) NOT NULL,
    sousType VARCHAR(20) NOT NULL,
    PRIMARY KEY (planteId),
    FOREIGN KEY (nomVariete) REFERENCES bdschema.Variete(nom)
    ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS bdschema.AssociationNefaste(
	idPlanteInitiale VARCHAR(10) NOT NULL,
	idPlanteNefaste VARCHAR(10) NOT NULL,
    solution TEXT NOT NULL,
    PRIMARY KEY (idPlanteInitiale, idPlanteNefaste),
    FOREIGN KEY (idPlanteInitiale) REFERENCES bdschema.Plante(planteId)
    	ON DELETE CASCADE ON UPDATE CASCADE,
	FOREIGN KEY (idPlanteNefaste) REFERENCES bdschema.Plante(planteId)
    	ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS bdschema.AssociationBenefique(
    idPlanteInitiale VARCHAR(10) NOT NULL,
	idPlanteBenefique VARCHAR(10) NOT NULL,
    PRIMARY KEY (idPlanteInitiale, idPlanteBenefique),
    FOREIGN KEY (idPlanteInitiale) REFERENCES bdschema.Plante(planteId)
		ON DELETE CASCADE ON UPDATE CASCADE,
	FOREIGN KEY (idPlanteBenefique) REFERENCES bdschema.Plante(planteId)
		ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS bdschema.ContenuJardin(
    jardinId VARCHAR(10) NOT NULL,
	planteId VARCHAR(10) NOT NULL,
    PRIMARY KEY (jardinId, planteId),
	FOREIGN KEY (jardinId) REFERENCES bdschema.Jardin(jardinId)
		ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (planteId) REFERENCES bdschema.Plante(planteId)
		ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS bdschema.Parcelle(
    parcelleId VARCHAR(10) NOT NULL,
    jardinId VARCHAR(10) NOT NULL,
    coordonneeX VARCHAR(6) NOT NULL,
    coordonneeY VARCHAR(6) NOT NULL,
    dimensionX SMALLINT NOT NULL,
    dimensionY SMALLINT NOT NULL,
    PRIMARY KEY (parcelleId, jardinId),
    FOREIGN KEY (jardinId) REFERENCES bdschema.Jardin(jardinId)
    ON DELETE CASCADE ON UPDATE CASCADE
);


CREATE TABLE IF NOT EXISTS bdschema.Rang(
	rangId VARCHAR(10) NOT NULL,
    jardinId VARCHAR(10) NOT NULL,
    parcelleId VARCHAR(10) NOT NULL,
    coordonneeX VARCHAR(6) NOT NULL,
    coordonneeY VARCHAR(6) NOT NULL,
	numero SMALLINT NOT NULL CHECK (numero > 0),
	joursDeJachere SMALLINT DEFAULT 0,
	PRIMARY KEY (rangId, jardinId, parcelleId),
    FOREIGN KEY (parcelleId, jardinId) REFERENCES bdschema.Parcelle(parcelleId, jardinId)
		ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS bdschema.ContenuRang(
	nomVariete VARCHAR(30) NOT NULL,
    rangId VARCHAR(10) NOT NULL,
	jardinId VARCHAR(10) NOT NULL,
    parcelleId VARCHAR(10) NOT NULL,
	typeMisEnPlace VARCHAR(30) NOT NULL,
	PRIMARY KEY (nomVariete, rangId, jardinId, parcelleId ),
	FOREIGN KEY (nomVariete) REFERENCES bdschema.Variete(nom)
		ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (rangId, jardinId, parcelleId) REFERENCES bdschema.Rang(rangId, jardinId, parcelleId)
		ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS bdschema.ProductionSemencier(
	nomVariete VARCHAR(30) NOT NULL,
	semencier VARCHAR(20) NOT NULL,
	estBiologique BOOLEAN NOT NULL,
	PRIMARY KEY (nomVariete, semencier),
    FOREIGN KEY (nomVariete) REFERENCES bdschema.Variete(nom)
		ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (semencier) REFERENCES bdschema.Semencier(semencierId)
		ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS bdschema.Affinite(
	nomVariete VARCHAR(30) NOT NULL,
	typeSol VARCHAR(20) NOT NULL,
	affinite VARCHAR(20) NOT NULL,
	PRIMARY KEY (nomVariete, typeSol),
    FOREIGN KEY (nomVariete) REFERENCES bdschema.Variete(nom)
		ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (typeSol) REFERENCES bdschema.TypeSol(type_)
		ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS bdschema.HistoriqueContenuRang(
    nomVariete VARCHAR(30) NOT NULL,
    rangId VARCHAR(10) NOT NULL,
    jardinId VARCHAR(10) NOT NULL,
    parcelleId VARCHAR(10) NOT NULL,
    typeMisEnPlace VARCHAR(30) NOT NULL,
    dateDeSauvegarde TIMESTAMP NOT NULL,
    PRIMARY KEY (nomVariete, rangId, jardinId, parcelleId, dateDeSauvegarde ),
    FOREIGN KEY (nomVariete) REFERENCES bdschema.Variete(nom)
        ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (rangId, jardinId, parcelleId) REFERENCES bdschema.Rang(rangId, jardinId, parcelleId)
        ON DELETE CASCADE ON UPDATE CASCADE
);