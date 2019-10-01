package Servicios

import io.gatling.core.Predef._
import io.gatling.http.Predef._
//import ch.qos.logback.classic.{Level, LoggerContext}
//import org.slf4j.LoggerFactory

class ObtenerCiudades extends Simulation{

 // val context: LoggerContext = LoggerFactory.getILoggerFactory.asInstanceOf[LoggerContext]

  // Log all HTTP requests
 // context.getLogger("io.gatling.http").setLevel(Level.valueOf("TRACE"))

  val mapRequest = Map("X-RapidAPI-Host" -> "restcountries-v1.p.rapidapi.com", "X-RapidAPI-Key" -> "32be28d259msh884ed6959c99c47p1cedc8jsnb3c0afe1aa1d","Content-Type" -> "application/json")

  val httpConf= http
        .baseUrl("https://restcountries-v1.p.rapidapi.com")
    .headers(mapRequest)


  val scn=scenario(scenarioName = "SmokeTest").exec(http(requestName="SmokeTest").get("/all"))
    //.check(bodyString.saveAs("myresponse")))
    //.exec {session =>
      //val response1 = session("myresponse").as[String]
      //println(response1)
      //session}

/*Ejecuta una carga de usuarios concurrentes inicia con 5 hasta 10 usuarios durante 60 segundos con una duracion maxia de 120 segundos la transaccion
  setUp(scn.inject(rampConcurrentUsers(5) to  (10) during(60)).protocols(httpConf)).maxDuration(120)*/
  /*Ejecuta 5 usuarios concurrentes durante 10 segundos, maxima duracion de una transaccion 50
     */
  // setUp(scn.inject(constantConcurrentUsers(5) during  (10)).protocols(httpConf)).maxDuration(50)
  // setUp(scn.inject(constantUsersPerSec(3) during  (10)).protocols(httpConf)).maxDuration(50)
  //setUp(scn.inject(atOnceUsers(1))).protocols(httpConf)
  setUp(scn.inject(rampUsersPerSec(5) to  (60) during(120)).protocols(httpConf)).maxDuration(240)
}
