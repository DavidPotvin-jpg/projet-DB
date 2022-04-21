export enum DatabaseQuery {
    getAllTable = 'SELECT * FROM bdschema.',
    getGardenContent = "SELECT * FROM bdschema.ContenuRang WHERE jardinId = $1;",
    getVarietyDetails = "SELECT * FROM bdschema.Variete WHERE nom = $1",
    searchPlant = "SELECT * FROM bdschema.Plante WHERE nom LIKE",
                            
    insertVariety= "INSERT INTO bdschema.Variete(nom, anneeDeMiseEnMarche, descriptionsSemis, plantation, entretien, recolte, periodeMiseEnPlace, periodeRecolte, commentaireGenerale) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9);",
    deleteVariety = "DELETE FROM bdschema.Variete WHERE nom = $1;",
    searchVariety = "SELECT * FROM bdschema.Variete WHERE nom LIKE",
    updateVarietyInformation = `UPDATE bdschema.Variete
                                SET anneeDeMiseEnMarche = $2, descriptionsSemis = $3, plantation = $4, 
                                entretien = $5, recolte = $6, periodeMiseEnPlace = $7, periodeRecolte = $8, commentaireGenerale = $9
                                WHERE nom = $1;`,
}