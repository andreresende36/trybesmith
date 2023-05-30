const bcrypt = require('bcryptjs');

// bcrypt.hash('terrível', 0).then((data) => console.log(data));

bcrypt.compare('terrível', '$2a$10$HQL/MfRFEnytZbjjUFJZFuzuUPIeV1wRRAYnI7iFWL9/l9rO1qU7e').then((data) => console.log(data));

// $2a$10$vTSX/aJN.fWK4p.QR6jUJehKus7AtCNHQByRPdSpHY1079FAILjkK