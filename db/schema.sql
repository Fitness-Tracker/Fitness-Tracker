DROP DATABASE fitness_tracker;

CREATE DATABASE fitness_tracker;


CREATE TABLE users(
  user_id INT NOT NULL AUTO_INCREMENT,
  user_name VARCHAR(255) NULL,
  password VARCHAR(255) NULL,
  date DATE,
  PRIMARY KEY (user_id)
);


CREATE TABLE profiles(
  profile_id INT NOT NULL AUTO_INCREMENT,
  user_id int NOT NULL,
  first_name VARCHAR(255) NULL,
  last_name VARCHAR(255) NULL,
  gender VARCHAR(10),
  PRIMARY KEY (profile_id),
  FOREIGN KEY (user_id) REFERENCES users(user_id)
);


CREATE TABLE biometrics(
  biometrics_id INT NOT NULL AUTO_INCREMENT,
  user_id int NOT NULL,
  date DATE,
  weight FLOAT NOT NULL,
  body_fat FLOAT NOT NULL,
  muscle_mass FLOAT NOT NULL,
  body_water FLOAT NOT NULL,
  bone_mass FLOAT NOT NULL,
  PRIMARY KEY (biometrics_id,date),
  FOREIGN KEY (user_id) REFERENCES users(user_id)
);


CREATE TABLE workoutdata(
  workout_id INT NOT NULL AUTO_INCREMENT,
  user_id INT NOT NULL,
  date DATE,
  exercise VARCHAR(255) NOT NULL,
  exercise_weight NUMERIC(4) NOT NULL,
  reps NUMERIC(4) NOT NULL,
  PRIMARY KEY (workout_id,date),
  FOREIGN KEY (user_id) REFERENCES users(user_id)
);
