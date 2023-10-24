USE employee_tracker;

INSERT INTO department(task)
VALUES(1, "Human Resources"), (2, "Marketing"), (3, "Finance"), (4, "Technology");

INSERT INTO role(task)
VALUES(001, "Human Resources Manager", 750.00, 1), (002, "Marketing Analyst", 600.00, 2), (003, "Social Media Manager", 500.00, 2), (004, "Director of Finance", 1500.00, 3), (005, "Finance Analyst", 750.00, 3), (006, "Computer Support Specialist", 700.00, 4), (007, "IT Administrator", 800.00, 4), (008, "Technical Support Engineer", 1250.00, 4);

INSERT INTO employee(task)
VALUES(001, "Kevin", "Lin", 001), (002, "Marin", "Olson", 002, 003), (003, "Claire", "Eckstrom", 003), (004, "Kerstin", "Ann", 004), (005, "Imran", "Sourjah", 005, 004), (006, "Ridge", "Souza", 006), (007, "Manny", "Terrell", 007), (008, "Pramuk", "Bogy", 008);