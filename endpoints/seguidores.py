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
    sql="SELECT * FROM seguidores natural join users WHERE userId=seguidorId and seguidosId = $seguidoId"
)
def get_by_id():
    pass

###############################################################################

@endpoint(
    route="/seguidores/seguidor/$seguidorId",
    method="GET",
    sql="SELECT * FROM seguidores natural join users WHERE userId=seguidosId and seguidorId = $seguidorId"
)
def get_by_id():
    pass

###############################################################################

@endpoint(
    route="/seguidores",
    method="POST",
    sql="INSERT INTO seguidores (seguidorId,seguidosId) VALUES ($seguidorId,$seguidosId)",
    description="Creates a new seguidos",
    auth_required=True,
)
def create(seguidorId,seguidosId):
    pass

###############################################################################

@endpoint(
    route="/seguidores/$seguidosId/$seguidorId",
    method="DELETE",
    sql="DELETE FROM seguidores WHERE seguidosId = $seguidosId AND seguidorId=$seguidorId",
    description="Removes a seguido",
    auth_required=True,
)
def delete():
    pass
