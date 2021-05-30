from silence.decorators import endpoint

@endpoint(
    route="/photoscategoria",
    method="GET",
    sql="SELECT * FROM photosCategoria"
)
def get_all():
    pass

###############################################################################

@endpoint(
    route="/photoscategoria/$photoscategoriaId",
    method="GET",
    sql="SELECT * FROM photosCategoria WHERE photosCategoriaId = $photoscategoriaId"
)
def get_by_id():
    pass

###############################################################################

@endpoint(
    route="/photoscategoria/photo/$photoId",
    method="GET",
    sql="SELECT nombre, categoriaId FROM Photos NATURAL JOIN photosCategoria NATURAL JOIN Categoria WHERE photoId = $photoId"
)
def get_by_photo():
    pass

###############################################################################

@endpoint(
    route="/photoscategoria/categoria/$catId",
    method="GET",
    sql="SELECT P.* FROM Photos P NATURAL JOIN photosCategoria NATURAL JOIN Categoria WHERE categoriaId = $catId AND visibility='public'"
)
def get_by_photo():
    pass

###############################################################################

@endpoint(
    route="/photoscategoria",
    method="POST",
    sql="INSERT into photosCategoria (photoId, categoriaId) VALUES ($photoId, $categoriaId)",
    description="Creates a new photoscategoria",
    auth_required=True,
)
def create(photoId,categoriaId):
    pass

###############################################################################

@endpoint(
    route="/photoscategoria/$categoriaId",
    method="PUT",
    sql="UPDATE categoria SET nombre = $nombre WHERE categoriaId = $categoriaId",
    description="Updates an existing categoria",
    auth_required=True,
)
def update(nombre):
    pass

###############################################################################

@endpoint(
    route="/photoscategoria/$categoriaId",
    method="DELETE",
    sql="DELETE FROM photosCategoria WHERE categoriaId = $categoriaId",
    description="Removes a categoria",
    auth_required=True,
)
def delete():
    pass
