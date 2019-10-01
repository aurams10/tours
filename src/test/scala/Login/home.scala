package Login
import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration._

class home extends Simulation{


  val httpProtocol= http
        .baseUrl("http://newtours.demoaut.com")


  val scn=scenario(scenarioName = "navegacion_home").exec(http(requestName="basicgetrequest").get("/mercurycruise.php"))

  setUp(scn.inject(atOnceUsers(users =1))).protocols(httpProtocol)

}
