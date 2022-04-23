-- 1 Lister toutes les plantes qui sont actuellement dans les rangs d’un jardin
SELECT * FROM bdschema.ContenuJardin NATURAL JOIN bdschema.Plante;

-- 2 Lister le nombre de rangs minimum et maximum sur les parcelles d’un jardin donné (choisissez-en dans vos données)
SELECT MIN(counted) as min, MAX(counted) as max
FROM (
SELECT Rang.parcelleId, 
COUNT(*) AS counted
FROM bdschema.Rang  Rang
WHERE Rang.jardinId = '0'
GROUP BY Rang.parcelleId
	) as MinEtMax;
	
-- 3 Lister les détails des parcelles qui ont la variété de plante A et la variété de plante B
SELECT DISTINCT * FROM bdschema.Parcelle NATURAL JOIN
(
	SELECT DISTINCT * FROM (
	SELECT ContenuRang.parcelleId, ContenuRang.jardinId
    FROM  bdschema.ContenuRang as ContenuRang
    WHERE ContenuRang.nomVariete = 'Fruitieres'
) as ParcellesFruitieres
NATURAL JOIN (
    SELECT ContenuRang.parcelleId, ContenuRang.jardinId
    FROM  bdschema.ContenuRang as ContenuRang
    WHERE ContenuRang.nomVariete = 'Legumieres'
) as ParcellesLegumieres
) as ParcellesLegumieresEtFruitieres;

-- 4 Lister les détails des parcelles qui ont la variété de plante A ou la variété de plante B
SELECT DISTINCT * FROM bdschema.Parcelle NATURAL JOIN (
    SELECT ContenuRang.parcelleId, ContenuRang.jardinId
    FROM  bdschema.ContenuRang as ContenuRang
    WHERE ContenuRang.nomVariete = 'Legumieres' OR ContenuRang.nomVariete = 'Fruitieres'
) as BonneParcelle;

-- 5 Lister les détails des parcelles qui ont la variété de plante A mais pas la variété de plante B
SELECT * FROM bdschema.Parcelle NATURAL JOIN
(
	SELECT DISTINCT * FROM (
	SELECT ContenuRang.parcelleId, ContenuRang.jardinId
    FROM  bdschema.ContenuRang as ContenuRang
    WHERE ContenuRang.nomVariete = 'Fruitieres'
) as ParcellesFruitieres
EXCEPT 
    SELECT ContenuRang.parcelleId, ContenuRang.jardinId
    FROM  bdschema.ContenuRang as ContenuRang
    WHERE ContenuRang.nomVariete = 'Legumieres'
) as ParcelleSeulementFruitieres;

-- 6  Lister tous les rangs d’un jardin donné avec leurs variétés de plantes s’ils sont cultivés. Dans le cas contraire, affichez null. 
SELECT * FROM (SELECT * FROM bdschema.Rang
WHERE Rang.JardinId = '0') as TousRangDuJardin
NATURAL LEFT OUTER JOIN
(SELECT * FROM (SELECT * FROM bdschema.Rang
WHERE Rang.jardinId = '0' AND Rang.joursDeJachere <= 0) rangCultiveDuJardin
NATURAL JOIN bdschema.ContenuRang
) as RangCultiveEtVarieteDuJardin;

-- 7  Lister tous les rangs d’un jardin donné avec leurs variétés de plantes s’ils sont cultivés. Dans le cas contraire, affichez null. 
 SELECT * FROM bdschema.Jardin NATURAL JOIN (
    SELECT jardinId FROM bdschema.Jardin EXCEPT
    SELECT DISTINCT jardinId FROM bdschema.ContenuRang NATURAL JOIN (
        SELECT nomVariete, estBiologique
        FROM bdschema.ProductionSemencier
        WHERE estBiologique = FALSE
        ) as semenceBiologique
    ) as jardinsBio;

-- 8  Lister tous les jardins qui ont au moins un rang en jachère
SELECT * FROM bdschema.Jardin NATURAL JOIN ( 
    SELECT jardinId FROM bdschema.Rang 
    GROUP BY jardinId HAVING SUM(joursDeJachere) > 0 ) as jardinsMatching;

-- 9  Quelles sont les menaces auxquelles sont sensibles les plantes fougères ?
SELECT Plante.nom FROM bdschema.Plante,
(SELECT AssociationNefaste.idPlanteNefaste FROM bdschema.AssociationNefaste, bdschema.Plante
	WHERE AssociationNefaste.idPlanteInitiale = Plante.planteId AND Plante.nom = 'fougere'
) as PlantesNefastes
WHERE Plante.planteId = PlantesNefastes.idPlanteNefaste;

-- 10  Quelles sont les menaces auxquelles sont sensibles les plantes fougères ?
SELECT * FROM bdschema.Plante WHERE nomVariete='tuberosum';
