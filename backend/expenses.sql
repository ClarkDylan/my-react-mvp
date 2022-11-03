DROP TABLE IF EXISTS expenses;

CREATE TABLE expenses (
  id SERIAL PRIMARY KEY,
  expense_name TEXT,
  expense_price INTEGER
);

INSERT INTO expenses (expense_name, expense_price) VALUES
('Phone Bill', 100)