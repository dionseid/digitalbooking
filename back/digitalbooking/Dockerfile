FROM adoptopenjdk/openjdk11:alpine-jre
COPY target/digitalbooking-0.0.1-SNAPSHOT.jar app.jar
EXPOSE 8080 2222 80 443
ENTRYPOINT ["java", "-jar", "app.jar"]