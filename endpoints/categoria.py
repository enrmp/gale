from silence.decorators import endpoint

@endpoint(
    route="/categoria",
    method="GET",
    sql="SELECT * FROM Categoria"
)
def get_all():
    pass

###############################################################################

@endpoint(
    route="/categoria/$categoriaId",
    method="GET",
    sql="SELECT * FROM Categoria WHERE categoriaId = $categoriaId"
)
def get_by_id():
    pass

###############################################################################

@endpoint(
    route="/categoria",
    method="POST",
    sql="INSERT INTO categoria (nombre) VALUES ($nombre)",
    description="Creates a new categoria",
    auth_required=True,
)
def create(nombre, photoId):
    pass

###############################################################################

@endpoint(
    route="/categoria/$categoriaId",
    method="PUT",
    sql="UPDATE categoria SET nombre = $nombre WHERE categoriaId = $categoriaId",
    description="Updates an existing categoria",
    auth_required=True,
)
def update(nombre):
    pass

###############################################################################

@endpoint(
    route="/categoria/$categoriaId",
    method="DELETE",
    sql="DELETE FROM Categoria WHERE categoriaId = $categoriaId",
    description="Removes a categoria",
    auth_required=True,
)
def delete():
    pass
