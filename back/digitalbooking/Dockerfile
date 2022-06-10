FROM adoptopenjdk/openjdk11:alpine-jre
ARG JAR_FILE=target/*.jar
COPY target/digitalbooking-0.0.1-SNAPSHOT.jar app.jar
EXPOSE 8080 2222 80 443
ENTRYPOINT ["java", "-jar", "app.jar"]