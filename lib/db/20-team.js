import sql from "#core/sql";

import CONST from "#lib/const";

export default sql`

CREATE TABLE "team" (
    "id" int8 PRIMARY KEY NOT NULL DEFAULT gen_object_id(${CONST.OBJECTS.team.id})
);

CREATE FUNCTION team_after_delete_trigger() RETURNS TRIGGER AS $$
BEGIN
    DELETE FROM "objectPermissions" WHERE "objectId" = OLD."id";

    RETURN NULL;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER "team_after_delete_trigger" AFTER DELETE ON "team" FOR EACH ROW EXECUTE PROCEDURE team_after_delete_trigger();

`;
