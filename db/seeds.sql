USE employee_tracker;

INSERT INTO department(name)
VALUES("Human Resources"), ("Marketing"), ("Finance"), ("Technology");

INSERT INTO role(title, salary, department_id)
VALUES("Human Resources Manager", 750.00, 1), ("Marketing Analyst", 600.00, 2), ("Social Media Manager", 500.00, 2), ("Director of Finance", 1500.00, 3), ("Finance Analyst", 750.00, 3), ("Computer Support Specialist", 700.00, 4), ("IT Administrator", 800.00, 4), ("Technical Support Engineer", 1250.00, 4);

INSERT INTO employee(id, first_name, last_name, role_id, manager_id)
VALUES(001, "Kevin", "Lin", 001, null), (002, "Claire", "Eckstrom", 002, null), (003, "Marin", "Olson", 003, 002), (004, "Kerstin", "Ann", 004, null), (005, "Imran", "Sourjah", 005, 004), (006, "Ridge", "Souza", 006, null), (007, "Manny", "Terrell", 007, null), (008, "Pramuk", "Bogy", 008, null);