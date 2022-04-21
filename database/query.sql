-- 1
SELECT * FROM bdschema.ContenuJardin NATURAL JOIN bdschema.Plante;

-- 2
SELECT MIN(counted) as min, MAX(counted) as max
FROM (
SELECT Rang.parcelleId, 
COUNT(*) AS counted
FROM bdschema.Rang  Rang
WHERE Rang.jardinId = '1'
GROUP BY Rang.parcelleId
	) as MinEtMax;
	
-- 3
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

-- 4
SELECT DISTINCT * FROM bdschema.Parcelle NATURAL JOIN (
    SELECT ContenuRang.parcelleId, ContenuRang.jardinId
    FROM  bdschema.ContenuRang as ContenuRang
    WHERE ContenuRang.nomVariete = 'Legumieres' OR ContenuRang.nomVariete = 'Fruitieres'
) as BonneParcelle;

-- 5
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

-- 6
SELECT * FROM (SELECT * FROM bdschema.Rang
WHERE Rang.JardinId = '1') as TousRangDuJardin
NATURAL LEFT OUTER JOIN
(SELECT * FROM (SELECT * FROM bdschema.Rang
WHERE Rang.jardinId = '1' AND Rang.joursDeJachere <= 0) rangCultiveDuJardin
NATURAL JOIN bdschema.ContenuRang
) as RangCultiveEtVarieteDuJardin;

-- 7
 SELECT * FROM bdschema.Jardin NATURAL JOIN (
    SELECT jardinId FROM bdschema.Jardin EXCEPT
    SELECT DISTINCT jardinId FROM bdschema.ContenuRang NATURAL JOIN (
        SELECT nomVariete, estBiologique
        FROM bdschema.ProductionSemencier
        WHERE estBiologique = FALSE
        ) as semenceBiologique
    ) as jardinsBio;

-- 8
SELECT * FROM bdschema.Jardin NATURAL JOIN ( 
    SELECT jardinId FROM bdschema.Rang 
    GROUP BY jardinId HAVING SUM(joursDeJachere) > 0 ) as jardinsMatching;

-- 9
SELECT Plante.nom FROM bdschema.Plante,
(SELECT AssociationNefaste.idPlanteNefaste FROM bdschema.AssociationNefaste, bdschema.Plante
	WHERE AssociationNefaste.idPlanteInitiale = Plante.planteId AND Plante.nom = 'fougere'
) as PlantesNefastes
WHERE Plante.planteId = PlantesNefastes.idPlanteNefaste;

-- 10
SELECT * FROM bdschema.Plante WHERE nomVariete='tuberosum';
