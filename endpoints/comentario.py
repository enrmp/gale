from silence.decorators import endpoint

@endpoint(
    route="/comentario",
    method="GET",
    sql="SELECT * FROM comentario"
)
def get_all():
    pass

###############################################################################

@endpoint(
    route="/comentario/$comentarioId",
    method="GET",
    sql="SELECT * FROM comentario WHERE comentarioId = $comentarioId"
)
def get_by_id():
    pass

###############################################################################

@endpoint(
    route="/comentario/photo/$photoId",
    method="GET",
    sql="SELECT * FROM comentario NATURAL JOIN users WHERE photoId = $photoId"
)
def get_by_id():
    pass

###############################################################################

@endpoint(
    route="/comentario",
    method="POST",
    sql="INSERT INTO comentario (texto, userId, photoId) VALUES ($texto, $userId, $photoId )",
    description="Creates a new comentario",
    auth_required=True,
)
def create(texto, userId, photoId):
    pass

###############################################################################
