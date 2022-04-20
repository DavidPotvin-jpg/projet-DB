export enum DatabaseQuery{
    getAllTable = 'SELECT * FROM bdschema.',
    getGardenContent = "SELECT * FROM bdschema.ContenuRang WHERE jardinId = $1;",
    getVarietyDetails = "SELECT * FROM bdschema.Variete WHERE nom = $1",
    insertPlant = "INSERT INTO bdschema.Plante(nomLatin, nomVariete, nom, categorie, type_, sousType) VALUES ($1, $2, $3, $4, $5, $6);",
    deletePlant = "DELETE FROM bdschema.Plante WHERE planteId = $1;",
    searchPlant = "SELECT * FROM bdschema.Plante WHERE nom LIKE",
    updatePlantInformation = `UPDATE bdschema.Plante
                                SET nomLatin = $2, nomVariete = $3, nom = $4,
                                categorie = $5, type_ = $6, soustype = $7
                                WHERE planteId = $1;`,
                                

}