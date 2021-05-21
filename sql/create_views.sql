CREATE OR REPLACE VIEW PhotosWithUsers AS
    SELECT P.*, U.username, U.avatarUrl
    FROM Photos P NATURAL JOIN Users U;

CREATE OR REPLACE VIEW PhotosWithCategoria AS
SELECT * FROM Photos
NATURAL JOIN photosCategoria NATURAL JOIN Categoria;
