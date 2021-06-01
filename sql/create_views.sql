CREATE OR REPLACE VIEW PhotosWithUsers AS
    SELECT P.*, U.username, U.avatarUrl
    FROM Photos P NATURAL JOIN Users U;

CREATE OR REPLACE VIEW PhotosWithCategoria AS
SELECT * FROM Photos
NATURAL JOIN photosCategoria NATURAL JOIN Categoria;

DELIMITER //
CREATE OR REPLACE TRIGGER triggerMaximumPhotos
BEFORE INSERT ON photos
FOR EACH ROW
BEGIN
DECLARE maxPhotos INT;
SET maxPhotos = (SELECT COUNT(*) FROM photos NATURAL JOIN users WHERE userId = new.userId GROUP BY userId);
IF(maxPhotos >= 50) THEN
SIGNAL SQLSTATE '45000' SET message_text =
'Solo puede subir 50 fotos ☹';
END IF;
END //
DELIMITER ;