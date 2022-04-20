SET search_path = bdschema;

INSERT INTO bdschema.TypeSol(type_) VALUES ('sableux');
INSERT INTO bdschema.TypeSol(type_) VALUES ('argileux');
INSERT INTO bdschema.TypeSol(type_) VALUES ('limoneux');
INSERT INTO bdschema.TypeSol(type_) VALUES ('humifere');

INSERT INTO bdschema.Jardin(typeSol, nom, surface, estPotager , estVerger, hauteurMax, estOrnement) 
	VALUES ('argileux', 'Odyssee', 100, false, false, NULL, true);
INSERT INTO bdschema.Jardin(typeSol, nom,surface, estPotager, estVerger, hauteurMax, estOrnement)
	VALUES ('sableux', 'Carthage', 125, false, true, 5, false);
INSERT INTO bdschema.Jardin(typeSol, nom, surface, estPotager, estVerger, hauteurMax, estOrnement)
	VALUES ('humifere', 'Hades', 200, true, false, NULL, false);

INSERT INTO bdschema.Semencier(semencierId, nom, siteWeb)
	VALUES ('0', 'Telesphore Dior', 'www.meilleurSemencesDuQuebec.gouv.qc.ca');
INSERT INTO bdschema.Semencier(semencierId, nom, siteWeb)
	VALUES ('1', 'Jean Poivron', 'www.semencesDeQualite.com');
INSERT INTO bdschema.Semencier(semencierId, nom, siteWeb)
	VALUES ('2', 'Franc Nivedtop', 'www.francNivedtop.com');

INSERT INTO bdschema.Variete(nom, anneeDeMiseEnMarche, descriptionsSemis, plantation, entretien, recolte, periodeMiseEnPlace, periodeRecolte, commentaireGenerale)
	VALUES ('Legumieres', 2017, 'description Legumieres', 'plantation Legumieres', 'entretien Legumieres', 'recolte Legumieres', 'automne', 'hiver', NULL);
INSERT INTO bdschema.Variete(nom, anneeDeMiseEnMarche, descriptionsSemis, plantation, entretien, recolte, periodeMiseEnPlace, periodeRecolte, commentaireGenerale)
	VALUES ('Fruitieres', 2018, 'description Fruitieres', 'plantation Fruitieres', 'entretien Fruitieres', 'recolte Fruitieres', 'ete', 'hiver', 'tres bon en soirees glaciales');
INSERT INTO bdschema.Variete(nom, anneeDeMiseEnMarche, descriptionsSemis, plantation, entretien, recolte, periodeMiseEnPlace, periodeRecolte, commentaireGenerale)
	VALUES ('tuberosum', 2018, 'description tuberosum', 'plantation tuberosum', 'entretien tuberosum', 'recolte tuberosum', 'automne', 'hiver', NULL);

INSERT INTO bdschema.Plante(nomLatin, nomVariete, nom, categorie, type_, sousType)
	VALUES ('Arenaria', 'Legumieres', 'fougere', 'legume', 'type plante0', 'sousType plante0');
INSERT INTO bdschema.Plante(nomLatin, nomVariete, nom, categorie, type_, sousType)
	VALUES ('Cornus', 'Fruitieres', 'pomme', 'fruit', 'type plante1', 'sousType plante1');
INSERT INTO bdschema.Plante(nomLatin, nomVariete, nom, categorie, type_, sousType)
	VALUES ('Fragaria', 'tuberosum', 'mauvaises herbes', 'fruit', 'type plante2', 'sousType plante2');
INSERT INTO bdschema.Plante(nomLatin, nomVariete, nom, categorie, type_, sousType)
	VALUES ('Geum', 'Legumieres', 'concombre', 'legume', 'type plante3', 'sousType plante3');
INSERT INTO bdschema.Plante(nomLatin, nomVariete, nom, categorie, type_, sousType)
	VALUES ('Iberes', 'Fruitieres', 'banane', 'fruit', 'type plante4', 'sousType plante4');
INSERT INTO bdschema.Plante(nomLatin, nomVariete, nom, categorie, type_, sousType)
	VALUES ('Ilex', 'tuberosum', 'chou', 'fruit', 'type plante5', 'sousType plante5');
	
INSERT INTO bdschema.AssociationNefaste(idPlanteInitiale, idPLanteNefaste, solution)
	VALUES ('1', '2', 'bruler');
INSERT INTO bdschema.AssociationNefaste(idPlanteInitiale, idPLanteNefaste, solution)
	VALUES ('1', '5', 'engrais');
INSERT INTO bdschema.AssociationNefaste(idPlanteInitiale, idPLanteNefaste, solution)
	VALUES ('3', '4', 'pesticide');

INSERT INTO bdschema.AssociationBenefique(idPlanteInitiale, idPlanteBenefique)
	VALUES ('5', '6');
INSERT INTO bdschema.AssociationBenefique(idPlanteInitiale, idPlanteBenefique)
	VALUES ('1', '4');

INSERT INTO bdschema.ContenuJardin(jardinId, planteId) VALUES ('1','1');
INSERT INTO bdschema.ContenuJardin(jardinId, planteId) VALUES ('1','2');
INSERT INTO bdschema.ContenuJardin(jardinId, planteId) VALUES ('2','5');
INSERT INTO bdschema.ContenuJardin(jardinId, planteId) VALUES ('2','4');
INSERT INTO bdschema.ContenuJardin(jardinId, planteId) VALUES ('3','3');
INSERT INTO bdschema.ContenuJardin(jardinId, planteId) VALUES ('3','6');

INSERT INTO bdschema.Parcelle(parcelleId, jardinId, coordonneeX, coordonneeY, dimensionX, dimensionY)
	VALUES ('0', '1', '0', '0', 3, 11);
INSERT INTO bdschema.Parcelle(parcelleId, jardinId, coordonneeX, coordonneeY, dimensionX, dimensionY)
	VALUES ('1', '1', '3', '11', 3, 11);
INSERT INTO bdschema.Parcelle(parcelleId, jardinId, coordonneeX, coordonneeY, dimensionX, dimensionY)
	VALUES ('2', '1', '6', '22', 3, 11);

INSERT INTO bdschema.Parcelle(parcelleId, jardinId, coordonneeX, coordonneeY, dimensionX, dimensionY)
	VALUES ('0', '2', '0', '0', 5, 8);
INSERT INTO bdschema.Parcelle(parcelleId, jardinId, coordonneeX, coordonneeY, dimensionX, dimensionY)
	VALUES ('1', '2', '5', '8', 5, 8);
INSERT INTO bdschema.Parcelle(parcelleId, jardinId, coordonneeX, coordonneeY, dimensionX, dimensionY)
	VALUES ('2', '2', '10', '16', 5, 8);

INSERT INTO bdschema.Parcelle(parcelleId, jardinId, coordonneeX, coordonneeY, dimensionX, dimensionY)
	VALUES ('0', '3', '0', '0', 5, 10);
INSERT INTO bdschema.Parcelle(parcelleId, jardinId, coordonneeX, coordonneeY, dimensionX, dimensionY)
	VALUES ('1', '3', '5', '10', 5, 10);
INSERT INTO bdschema.Parcelle(parcelleId, jardinId, coordonneeX, coordonneeY, dimensionX, dimensionY)
	VALUES ('2', '3', '10', '20', 5, 10);
INSERT INTO bdschema.Parcelle(parcelleId, jardinId, coordonneeX, coordonneeY, dimensionX, dimensionY)
	VALUES ('3', '3', '15', '30', 5, 10);

-- RANGS DE DU JARDIN 0 PARCELLE 0
INSERT INTO bdschema.Rang(rangId, jardinId, parcelleId, coordonneeX, coordonneeY, numero, joursDeJachere)
	VALUES ('0', '1', '0', '0', '0', 1, 0);
INSERT INTO bdschema.Rang(rangId, jardinId, parcelleId, coordonneeX, coordonneeY, numero, joursDeJachere)
	VALUES ('1', '1', '0', '2', '8', 2, 0);
INSERT INTO bdschema.Rang(rangId, jardinId, parcelleId, coordonneeX, coordonneeY, numero, joursDeJachere)
	VALUES ('2', '1', '0', '3', '10', 3,0);
-- RANGS DE DU JARDIN 0 PARCELLE 1
INSERT INTO bdschema.Rang(rangId, jardinId, parcelleId, coordonneeX, coordonneeY, numero, joursDeJachere)
	VALUES ('0', '1', '1', '0', '0', 1, 1);
INSERT INTO bdschema.Rang(rangId, jardinId, parcelleId, coordonneeX, coordonneeY, numero, joursDeJachere)
	VALUES ('1', '1', '1', '2', '8', 2, 1);
INSERT INTO bdschema.Rang(rangId, jardinId, parcelleId, coordonneeX, coordonneeY, numero, joursDeJachere)
	VALUES ('2', '1', '1', '3', '10', 3, 1);
-- RANGS DE DU JARDIN 0 PARCELLE 2
INSERT INTO bdschema.Rang(rangId, jardinId, parcelleId, coordonneeX, coordonneeY, numero, joursDeJachere)
	VALUES ('0', '1', '2', '0', '0', 1, 2);
INSERT INTO bdschema.Rang(rangId, jardinId, parcelleId, coordonneeX, coordonneeY, numero, joursDeJachere)
	VALUES ('1', '1', '2', '2', '8', 2, 2);
INSERT INTO bdschema.Rang(rangId, jardinId, parcelleId, coordonneeX, coordonneeY, numero, joursDeJachere)
	VALUES ('2', '1', '2', '3', '10', 3, 2);

-- RANGS DE DU JARDIN 1 PARCELLE 0
INSERT INTO bdschema.Rang(rangId, jardinId, parcelleId, coordonneeX, coordonneeY, numero, joursDeJachere)
	VALUES ('0', '2', '0', '0', '0', 1, 2);
INSERT INTO bdschema.Rang(rangId, jardinId, parcelleId, coordonneeX, coordonneeY, numero, joursDeJachere)
	VALUES ('1', '2', '0', '2', '2', 2, 56);
INSERT INTO bdschema.Rang(rangId, jardinId, parcelleId, coordonneeX, coordonneeY, numero, joursDeJachere)
	VALUES ('2', '2', '0', '4', '4', 3, 1);
-- RANGS DE DU JARDIN 1 PARCELLE 1
INSERT INTO bdschema.Rang(rangId, jardinId, parcelleId, coordonneeX, coordonneeY, numero, joursDeJachere)
	VALUES ('0', '2', '1', '0', '0', 1, 0);
INSERT INTO bdschema.Rang(rangId, jardinId, parcelleId, coordonneeX, coordonneeY, numero, joursDeJachere)
	VALUES ('1', '2', '1', '2', '2', 2, 5);
INSERT INTO bdschema.Rang(rangId, jardinId, parcelleId, coordonneeX, coordonneeY, numero, joursDeJachere)
	VALUES ('2', '2', '1', '4', '4', 3, 64);
-- RANGS DE DU JARDIN 1 PARCELLE 2
INSERT INTO bdschema.Rang(rangId, jardinId, parcelleId, coordonneeX, coordonneeY, numero, joursDeJachere)
	VALUES ('0', '2', '2', '0', '0', 1, 0);
INSERT INTO bdschema.Rang(rangId, jardinId, parcelleId, coordonneeX, coordonneeY, numero, joursDeJachere)
	VALUES ('1', '2', '2', '2', '2', 2, 0);
INSERT INTO bdschema.Rang(rangId, jardinId, parcelleId, coordonneeX, coordonneeY, numero, joursDeJachere)
	VALUES ('2', '2', '2', '4', '4', 3, 5);

-- RANGS DE DU JARDIN 2 PARCELLE 0
INSERT INTO bdschema.Rang(rangId, jardinId, parcelleId, coordonneeX, coordonneeY, numero, joursDeJachere)
	VALUES ('0', '3', '0', '0', '0', 1, 2);
INSERT INTO bdschema.Rang(rangId, jardinId, parcelleId, coordonneeX, coordonneeY, numero, joursDeJachere)
	VALUES ('1', '3', '0', '2', '2', 2, 5);
INSERT INTO bdschema.Rang(rangId, jardinId, parcelleId, coordonneeX, coordonneeY, numero, joursDeJachere)
	VALUES ('2', '3', '0', '4', '4', 3, 0);
-- RANGS DE DU JARDIN 2 PARCELLE 1
INSERT INTO bdschema.Rang(rangId, jardinId, parcelleId, coordonneeX, coordonneeY, numero, joursDeJachere)
	VALUES ('0', '3', '1', '0', '0', 1, 21);
INSERT INTO bdschema.Rang(rangId, jardinId, parcelleId, coordonneeX, coordonneeY, numero, joursDeJachere)
	VALUES ('1', '3', '1', '2', '2', 2, 0);
INSERT INTO bdschema.Rang(rangId, jardinId, parcelleId, coordonneeX, coordonneeY, numero, joursDeJachere)
	VALUES ('2', '3', '1', '4', '4', 3, 6);
-- RANGS DE DU JARDIN 2 PARCELLE 2
INSERT INTO bdschema.Rang(rangId, jardinId, parcelleId, coordonneeX, coordonneeY, numero, joursDeJachere)
	VALUES ('0', '3', '2', '0', '0', 1, 64);
INSERT INTO bdschema.Rang(rangId, jardinId, parcelleId, coordonneeX, coordonneeY, numero, joursDeJachere)
	VALUES ('1', '3', '2', '2', '2', 2, 6);
INSERT INTO bdschema.Rang(rangId, jardinId, parcelleId, coordonneeX, coordonneeY, numero, joursDeJachere)
	VALUES ('2', '3', '2', '4', '4', 3, 0);
-- RANGS DE DU JARDIN 2 PARCELLE 3
INSERT INTO bdschema.Rang(rangId, jardinId, parcelleId, coordonneeX, coordonneeY, numero, joursDeJachere)
	VALUES ('0', '3', '3', '0', '0', 1, 0);
INSERT INTO bdschema.Rang(rangId, jardinId, parcelleId, coordonneeX, coordonneeY, numero, joursDeJachere)
	VALUES ('1', '3', '3', '2', '2', 2, 0);
INSERT INTO bdschema.Rang(rangId, jardinId, parcelleId, coordonneeX, coordonneeY, numero, joursDeJachere)
	VALUES ('2', '3', '3', '4', '4', 3, 0);	

-- CONTENU RANG JARDIN 0 PARCELLE 0
INSERT INTO bdschema.ContenuRang(nomVariete, rangId, jardinId, parcelleId, typeMisEnPlace)
	VALUES ('Legumieres', '0', '1', '0', 'mise en place 1');
INSERT INTO bdschema.ContenuRang(nomVariete, rangId, jardinId, parcelleId, typeMisEnPlace)
	VALUES ('Fruitieres', '1', '1', '0', 'mise en place 2');
INSERT INTO bdschema.ContenuRang(nomVariete, rangId, jardinId, parcelleId, typeMisEnPlace)
	VALUES ('tuberosum', '2', '1', '0', 'mise en place 2');
-- CONTENU RANG JARDIN 0 PARCELLE 1
INSERT INTO bdschema.ContenuRang(nomVariete, rangId, jardinId, parcelleId, typeMisEnPlace)
	VALUES ('tuberosum', '0', '1', '1', 'mise en place 2');
INSERT INTO bdschema.ContenuRang(nomVariete, rangId, jardinId, parcelleId, typeMisEnPlace)
	VALUES ('Legumieres', '1', '1', '1', 'mise en place 3');
INSERT INTO bdschema.ContenuRang(nomVariete, rangId, jardinId, parcelleId, typeMisEnPlace)
	VALUES ('Fruitieres', '2', '1', '1', 'mise en place 1');
-- CONTENU RANG JARDIN 0 PARCELLE 2
INSERT INTO bdschema.ContenuRang(nomVariete, rangId, jardinId, parcelleId, typeMisEnPlace)
	VALUES ('Legumieres', '0', '1', '2', 'mise en place 1');
INSERT INTO bdschema.ContenuRang(nomVariete, rangId, jardinId, parcelleId, typeMisEnPlace)
	VALUES ('tuberosum', '1', '1', '2', 'mise en place 3');
INSERT INTO bdschema.ContenuRang(nomVariete, rangId, jardinId, parcelleId, typeMisEnPlace)
	VALUES ('Fruitieres', '2', '1', '2', 'mise en place 2');

INSERT INTO bdschema.ContenuRang(nomVariete, rangId, jardinId, parcelleId, typeMisEnPlace)
	VALUES ('Fruitieres', '0', '2', '0', 'mise en place 2');
INSERT INTO bdschema.ContenuRang(nomVariete, rangId, jardinId, parcelleId, typeMisEnPlace)
	VALUES ('Fruitieres', '0', '2', '1', 'mise en place 3');

INSERT INTO bdschema.ContenuRang(nomVariete, rangId, jardinId, parcelleId, typeMisEnPlace)
	VALUES ('tuberosum', '0', '3', '2', 'mise en place 3');
INSERT INTO bdschema.ContenuRang(nomVariete, rangId, jardinId, parcelleId, typeMisEnPlace)
	VALUES ('tuberosum', '0', '3', '3', 'mise en place 1');

INSERT INTO bdschema.ProductionSemencier(nomVariete, semencier, estBiologique)
	VALUES ('Legumieres', '0', true);
INSERT INTO bdschema.ProductionSemencier(nomVariete, semencier, estBiologique)
	VALUES ('Fruitieres', '1', false);
INSERT INTO bdschema.ProductionSemencier(nomVariete, semencier, estBiologique)
	VALUES ('tuberosum', '2', true);

INSERT INTO bdschema.Affinite(nomVariete, typeSol, affinite)
	VALUES ('Legumieres', 'sableux', '10');
INSERT INTO bdschema.Affinite(nomVariete, typeSol, affinite)
	VALUES ('Legumieres', 'argileux', '45');
INSERT INTO bdschema.Affinite(nomVariete, typeSol, affinite)
	VALUES ('Legumieres', 'limoneux', '60');
INSERT INTO bdschema.Affinite(nomVariete, typeSol, affinite)
	VALUES ('Legumieres', 'humifere', '75');

INSERT INTO bdschema.Affinite(nomVariete, typeSol, affinite)
	VALUES ('Fruitieres', 'sableux', '25');
INSERT INTO bdschema.Affinite(nomVariete, typeSol, affinite)
	VALUES ('Fruitieres', 'argileux', '20');
INSERT INTO bdschema.Affinite(nomVariete, typeSol, affinite)
	VALUES ('Fruitieres', 'limoneux', '80');
INSERT INTO bdschema.Affinite(nomVariete, typeSol, affinite)
	VALUES ('Fruitieres', 'humifere', '95');

INSERT INTO bdschema.Affinite(nomVariete, typeSol, affinite)
	VALUES ('tuberosum', 'sableux', '10');
INSERT INTO bdschema.Affinite(nomVariete, typeSol, affinite)
	VALUES ('tuberosum', 'argileux', '60');
INSERT INTO bdschema.Affinite(nomVariete, typeSol, affinite)
	VALUES ('tuberosum', 'limoneux', '35');
INSERT INTO bdschema.Affinite(nomVariete, typeSol, affinite)
	VALUES ('tuberosum', 'humifere', '80');

SELECT * FROM bdschema.TypeSol;
SELECT * FROM bdschema.Jardin;
SELECT * FROM bdschema.Semencier;
SELECT * FROM bdschema.Variete;
SELECT * FROM bdschema.Plante;
SELECT * FROM bdschema.AssociationNefaste;
SELECT * FROM bdschema.AssociationBenefique;
SELECT * FROM bdschema.ContenuJardin;
SELECT * FROM bdschema.Parcelle;
SELECT * FROM bdschema.Rang;
SELECT * FROM bdschema.ContenuRang;
SELECT * FROM bdschema.ProductionSemencier;
SELECT * FROM bdschema.Affinite;

SELECT * FROM bdschema.HistoriqueContenuRang;



