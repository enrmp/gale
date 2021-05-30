from silence.decorators import endpoint

@endpoint(
    route="/seguidores",
    method="GET",
    sql="SELECT * FROM seguidores WHERE visibility='public' ORDER BY date DESC"
)
def get_all():
    pass

###############################################################################

@endpoint(
    route="/seguidores/seguido/$seguidoId",
    method="GET",
    sql="SELECT * FROM seguidores WHERE seguidoId = $seguidoId"
)
def get_by_id():
    pass

###############################################################################

@endpoint(
    route="/seguidores/seguidor/$seguidorId",
    method="GET",
    sql="SELECT * FROM seguidores WHERE seguidorId = $seguidorId"
)
def get_by_id():
    pass

###############################################################################

@endpoint(
    route="/seguidores",
    method="POST",
    sql="INSERT INTO seguidores (seguidorId,seguidoId) VALUES ($seguidorId,$seguidoId)",
    description="Creates a new seguido",
    auth_required=True,
)
def create(seguidorId,seguidoId):
    pass

###############################################################################

@endpoint(
    route="/seguidores/$seguidoId/$seguidorId",
    method="DELETE",
    sql="DELETE FROM seguidores WHERE seguidoId = $seguidoId AND seguidorId=$seguidorId",
    description="Removes a seguido",
    auth_required=True,
)
def delete():
    pass
