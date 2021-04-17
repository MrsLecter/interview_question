/* Create database COMPANY */
CREATE TABLE employee (
  emp_id INT PRIMARY KEY,
  first_name VARCHAR(40),
  last_name VARCHAR(40),
  birth_day DATE,
  sex VARCHAR(1),
  salary INT,
  super_id INT,
  branch_id INT
  );

  CREATE TABLE branch (
   branch_id INT PRIMARY KEY,
   branch_name VARCHAR(40),
   mgr_id INT,
   mgr_start_date DATE,
   FOREIGN KEY(mgr_id) REFERENCES employee(emp_id) ON DELETE SET NULL
  );
  
    
  ALTER TABLE employee ADD FOREIGN KEY(branch_id)
  REFERENCES branch(branch_id) ON DELETE SET NULL;
  
  ALTER TABLE employee ADD FOREIGN KEY(super_id) 
  REFERENCES employee(emp_id) ON DELETE SET NULL;
  
  CREATE TABLE client (
    client_id INT PRIMARY KEY,
    client_name VARCHAR(40),
    branch_id INT,
    FOREIGN KEY(branch_id) REFERENCES branch(branch_id) ON DELETE SET NULL
  );
  
  CREATE TABLE works_with (
    emp_id INT,
    client_id INT,
    total_sales INT,
    PRIMARY KEY(emp_id, client_id),
    FOREIGN KEY(emp_id) REFERENCES employee(emp_id) ON DELETE CASCADE,
    FOREIGN KEY(client_id) REFERENCES client(client_id) ON DELETE CASCADE
  );
  
  CREATE TABLE branch_supplier (
    branch_id INT,
    supplier_name VARCHAR(40),
    supply_type VARCHAR(40),
    PRIMARY KEY(branch_id, supplier_name),
    FOREIGN KEY(branch_id) REFERENCES branch(branch_id) ON DELETE CASCADE
  );
  
  
  INSERT INTO employee VALUES(100, 'David', 'Wallace', '1967-11-17', 'M', 2500, NULL, NULL);
  INSERT INTO employee VALUES(101, 'Sara', 'Connor', '1957-05-09', 'F', 3000, NULL, NULL);
  INSERT INTO employee VALUES(102, 'Michel', 'Scott', '1964-03-15', 'M', 7500, NULL, NULL);
  INSERT INTO employee VALUES(103, 'Angela', 'Martin', '1971-06-25', 'F', 6300, NULL, NULL);
  INSERT INTO employee VALUES(104, 'Kelly', 'Kapoor', '1980-02-05', 'F', 5500, NULL, NULL);
  INSERT INTO employee VALUES(105, 'Stenly', 'Hudson', '1958-02-19', 'M', 6900, NULL, NULL);
  INSERT INTO employee VALUES(106, 'Josh', 'Porter', '1969-09-05', 'M', 7800, NULL, NULL);
  INSERT INTO employee VALUES(107, 'Andy', 'Bernard', '1973-07-22', 'M', 6500, NULL, NULL);
  INSERT INTO employee VALUES(108, 'Jim', 'Halpert', '1978-10-01', 'M', 7100, NULL, NULL);
  
  INSERT INTO branch VALUES(1, 'Corporate', 100, '2006-02-09');
  INSERT INTO branch VALUES(2, 'Scranton', 102, '1992-04-06');
  INSERT INTO branch VALUES(3, 'Stampford', 106, '1998-02-13');
  
  UPDATE employee SET branch_id=1 WHERE emp_id=100 AND emp_id=101;
  UPDATE employee SET branch_id=2 WHERE emp_id=102 AND emp_id=103 AND emp_id=104 AND emp_id=105;
  UPDATE employee SET branch_id=3 WHERE emp_id=106 AND emp_id=107 AND emp_id=108;
  
  UPDATE employee SET super_id=100 WHERE emp_id IN (101, 102, 106);
  UPDATE employee SET super_id=102 WHERE emp_id>102 AND emp_id<106;
  UPDATE employee SET super_id=106 WHERE emp_id IN (107, 108);
  
  INSERT INTO client VALUES(400, 'Dunmore Hightschool', 2);
  INSERT INTO client VALUES(401, 'Lackawana Country', 2);
  INSERT INTO client VALUES(402, 'FedEx', 3);
  INSERT INTO client VALUES(403, 'John Daly Law', 3);
  INSERT INTO client VALUES(404, 'ScrantonWhitepages', 2);
  INSERT INTO client VALUES(405, 'Times Newspaper', 3);
  INSERT INTO client VALUES(406, 'FedEx Hawana', 2);

  INSERT INTO works_with VALUES(105, 400, 5500);
  INSERT INTO works_with VALUES(102, 401, 26700);
  INSERT INTO works_with VALUES(108, 402, 22500);
  INSERT INTO works_with VALUES(105, 404, 3300);
  INSERT INTO works_with VALUES(107, 405, 2600);
  INSERT INTO works_with VALUES(102, 406, 1500);
  INSERT INTO works_with VALUES(105, 406, 13000);
  
  INSERT INTO branch_supplier VALUES(2, 'Hammer Mill', 'Paper');
  INSERT INTO branch_supplier VALUES(2, 'Uni-ball', 'Writing Utensils');
  INSERT INTO branch_supplier VALUES(3, 'Patriot Paper', 'Paper');
  INSERT INTO branch_supplier VALUES(2, 'JT Forms & Labels', 'Custom forms');

SELECT * FROM branch;
SELECT * FROM employee;
  

  