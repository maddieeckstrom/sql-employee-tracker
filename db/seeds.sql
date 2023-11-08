USE employee_tracker;

INSERT INTO department(name)
VALUES("Human Resources"), ("Marketing"), ("Finance"), ("Technology");

INSERT INTO role(title, salary, department_id)
VALUES("Human Resources Manager", 750.00, 1), ("Marketing Analyst", 600.00, 2), ("Social Media Manager", 500.00, 2), ("Director of Finance", 1500.00, 3), ("Finance Analyst", 750.00, 3), ("Computer Support Specialist", 700.00, 4), ("IT Administrator", 800.00, 4), ("Technical Support Engineer", 1250.00, 4);

INSERT INTO employee(id, first_name, last_name, role_id, manager_id)
VALUES(1, "Kevin", "Lin", 1, null), (2, "Claire", "Eckstrom", 2, null), (3, "Marin", "Olson", 3, 2), (4, "Kerstin", "Ann", 4, null), (5, "Imran", "Sourjah", 5, 4), (6, "Ridge", "Souza", 6, null), (7, "Manny", "Terrell", 7, null), (8, "Pramuk", "Bogy", 8, null);