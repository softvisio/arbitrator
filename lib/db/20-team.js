import sql from "#core/sql";
import config from "#lib/config";

export default sql`

CREATE SEQUENCE team_id_seq AS int8 MAXVALUE 36028797018963967;

CREATE TABLE team (
    id int8 PRIMARY KEY NOT NULL DEFAULT gen_object_id( ${config.objects.team.id}, 'team_id_seq' )
);

CREATE FUNCTION team_after_delete_trigger() RETURNS TRIGGER AS $$
BEGIN
    DELETE FROM object_user WHERE object_id = OLD.id;

    RETURN NULL;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER team_after_delete AFTER DELETE ON team FOR EACH ROW EXECUTE FUNCTION team_after_delete_trigger();

`;
