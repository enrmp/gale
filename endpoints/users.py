from silence.decorators import endpoint

@endpoint(
    route="/users/$userId",
    method="GET",
    sql="SELECT U.*,round(AVG(V.valor),1) AS media FROM users U JOIN photos P ON(U.userId=P.userId) JOIN valoracion V ON (P.photoId=V.photoId) WHERE P.visibility='public' AND U.userId = $userId"
)
def get_by_id():
    pass
