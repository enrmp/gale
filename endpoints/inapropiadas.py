from silence.decorators import endpoint

@endpoint(
    route="/inapropiadas",
    method="GET",
    sql="SELECT * FROM Inapropiadas"
)
def get_all():
    pass

###############################################################################

@endpoint(
    route="/inapropiadas/$inapropiadasId",
    method="GET",
    sql="SELECT * FROM Inapropiadas WHERE inapropiadasId = $inapropiadasId"
)
def get_by_id():
    pass

###############################################################################

@endpoint(
    route="/inapropiadas",
    method="POST",
    sql="INSERT INTO Inapropiadas (palabra) VALUES ($palabra)",
    description="Creates a new inapropiadas",
    auth_required=False,
)
def create(palabra, photoId):
    pass

###############################################################################

@endpoint(
    route="/inapropiadas/$inapropiadasId",
    method="PUT",
    sql="UPDATE Inapropiadas SET palabra = $palabra WHERE inapropiadasId = $inapropiadasId",
    description="Updates an existing inapropiadas",
    auth_required=False,
)
def update(palabra):
    pass

###############################################################################

@endpoint(
    route="/inapropiadas/$inapropiadasId",
    method="DELETE",
    sql="DELETE FROM Inapropiadas WHERE inapropiadasId = $inapropiadasId",
    description="Removes a inapropiadas",
    auth_required=False,
)
def delete():
    pass
