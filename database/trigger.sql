CREATE OR REPLACE FUNCTION save_content() RETURNS TRIGGER AS $save_content$
    BEGIN
		-- TODO: Verify all the NOT NULL values
		IF NEW.rangId IS NOT NULL THEN
        INSERT INTO bdschema.HistoriqueContenuRang
        VALUES (NEW.nomVariete, NEW.rangId, NEW.jardinId, NEW.parcelleId, NEW.typeMisEnPlace, CURRENT_TIMESTAMP);
    	END IF;
		RETURN NULL;
	END;
    $save_content$
    LANGUAGE plpgsql;
        

CREATE OR REPLACE TRIGGER  contenuRangModification 
	AFTER INSERT OR UPDATE ON bdschema.ContenuRang
	FOR ROW EXECUTE FUNCTION save_content();