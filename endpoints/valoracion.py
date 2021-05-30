from silence.decorators import endpoint

@endpoint(
    route="/valoracion",
    method="GET",
    sql="SELECT * FROM valoracion"
)
def get_all():
    pass

###############################################################################

@endpoint(
    route="/valoracion/$valoracionId",
    method="GET",
    sql="SELECT * FROM valoracion WHERE valoracionId = $valoracionId"
)
def get_by_id():
    pass

###############################################################################

@endpoint(
    route="/valoracion/photo/$photoId",
    method="GET",
    sql="SELECT * FROM valoracion NATURAL JOIN users WHERE photoId = $photoId"
)
def get_by_id():
    pass

###############################################################################

@endpoint(
    route="/valoracion/user/$userId",
    method="GET",
    sql="SELECT * FROM valoracion JOIN photos WHERE valoracion.userId = $userId AND valoracion.photoId = photos.photoId"
)
def get_by_id():
    pass

###############################################################################

@endpoint(
    route="/valoracion",
    method="POST",
    sql="INSERT INTO valoracion (valor, userId, photoId) VALUES ($valor, $userId, $photoId )",
    description="Creates a new valoracion",
    auth_required=True,
)
def create(valor, userId, photoId):
    pass

###############################################################################
