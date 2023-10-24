USE employee_tracker;

INSERT INTO department(id, name)
VALUES(1, "Human Resources"), (2, "Marketing"), (3, "Finance"), (4, "Technology");

INSERT INTO role(id, title, salary, department_id)
VALUES(001, "Human Resources Manager", 750.00, 1), (002, "Marketing Analyst", 600.00, 2), (003, "Social Media Manager", 500.00, 2), (004, "Director of Finance", 1500.00, 3), (005, "Finance Analyst", 750.00, 3), (006, "Computer Support Specialist", 700.00, 4), (007, "IT Administrator", 800.00, 4), (008, "Technical Support Engineer", 1250.00, 4);

INSERT INTO employee(id, first_name, last_name, role_id, manager_id)
VALUES(001, "Kevin", "Lin", 001, null), (002, "Claire", "Eckstrom", 002, null), (003, "Marin", "Olson", 003, 002), (004, "Kerstin", "Ann", 004, null), (005, "Imran", "Sourjah", 005, 004), (006, "Ridge", "Souza", 006, null), (007, "Manny", "Terrell", 007, null), (008, "Pramuk", "Bogy", 008, null);