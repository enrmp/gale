from silence.decorators import endpoint

@endpoint(
    route="/photos",
    method="GET",
    sql="SELECT * FROM Photos WHERE visibility='public' ORDER BY date DESC"
)
def get_all():
    pass

###############################################################################

@endpoint(
    route="/photos/siguiendo/$userId",
    method="GET",
    sql="SELECT * FROM photos NATURAL JOIN seguidores WHERE seguidorId = $userId AND userId=seguidosId AND visibility='public' GROUP BY photoId ORDER BY date DESC"
)
def get_by_id():
    pass

###############################################################################

@endpoint(
    route="/photos/$photoId",
    method="GET",
    sql="SELECT * FROM Photos WHERE photoId = $photoId"
)
def get_by_id():
    pass

###############################################################################

@endpoint(
    route="/photos/media/$photoId",
    method="GET",
    sql="SELECT P.*, V.*, round(AVG(V.valor),1) AS media FROM photos P JOIN valoracion V ON (P.photoId=V.photoId)  WHERE V.photoId = $photoId"
)
def get_by_id():
    pass

###############################################################################

@endpoint(
    route="/photos/media",
    method="GET",
    sql="SELECT round(avg(valor),1) AS media,P.*,U.* FROM valoracion V JOIN photos P ON (V.photoId = P.photoId) JOIN users U ON (P.userId=U.userId) GROUP BY V.photoId order BY media desc"
)
def get_by_id():
    pass

###############################################################################

@endpoint(
    route="/photos/user/$userId",
    method="GET",
    sql="SELECT * FROM Photos WHERE userId = $userId AND visibility='public' ORDER BY date DESC"
)
def get_by_id():
    pass

###############################################################################

@endpoint(
    route="/photos/count/user/$userId",
    method="GET",
    sql="SELECT * FROM photos NATURAL JOIN users WHERE userId = $userId"
)
def get_by_id():
    pass

###############################################################################

@endpoint(
    route="/photos/userprivate/$userId",
    method="GET",
    sql="SELECT * FROM Photos WHERE userId = $userId AND visibility='private' ORDER BY date DESC"
)
def get_by_id():
    pass

###############################################################################

@endpoint(
    route="/photos",
    method="POST",
    sql="INSERT INTO Photos (title, description, url, visibility, userId) VALUES ($title, $description, $url, $visibility, $userId)",
    description="Creates a new photo",
    auth_required=True,
)
def create(title, description, url, visibility, userId):
    pass

###############################################################################

@endpoint(
    route="/photos/$photoId",
    method="PUT",
    sql="UPDATE Photos SET title = $title, description = $description, url = $url, visibility = $visibility WHERE photoId = $photoId",
    description="Updates an existing photo",
    auth_required=True,
)
def update(title, description, url, visibility):
    pass

###############################################################################

@endpoint(
    route="/photos/$photoId",
    method="DELETE",
    sql="DELETE FROM Photos WHERE photoId = $photoId",
    description="Removes a photo",
    auth_required=True,
)
def delete():
    pass
