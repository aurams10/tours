package Servicios

import io.gatling.core.Predef._
import io.gatling.http.Predef._


class ListarUsuarios extends Simulation{



  //val mapRequest = Map("X-RapidAPI-Host" -> "restcountries-v1.p.rapidapi.com", "X-RapidAPI-Key" -> "32be28d259msh884ed6959c99c47p1cedc8jsnb3c0afe1aa1d","Content-Type" -> "application/json")

  val httpConf= http
        .baseUrl("https://reqres.in")
   // .headers(mapRequest)


  val scn=scenario(scenarioName = "SmokeTest").exec(http(requestName="SmokeTest").get("/api/users")
    .check(bodyString.saveAs("myresponse")))
    .exec {session =>
      val response1 = session("myresponse").as[String]
      println(response1)
      session}


  setUp(scn.inject(atOnceUsers(1))).protocols(httpConf)

}
