BEGIN;

DROP TABLE IF EXISTS users, cohorts CASCADE;

CREATE TABLE cohorts (
    cohort_id SERIAL PRIMARY KEY,
    name VARCHAR(6)
);

INSERT INTO cohorts (name) VALUES
('FAC 18');

CREATE TABLE users (
    users_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    cohort_id INTEGER REFERENCES cohorts(cohort_id),
    image_prof VARCHAR(400),
    image_party VARCHAR(400),
    quote VARCHAR(200) NOT NULL,
    emoji VARCHAR(5) NOT NULL,	
    tea_coffee VARCHAR(20),
    hogwarts VARCHAR(15),
    cuisine VARCHAR(100),
    fruit VARCHAR(50),
    snack VARCHAR(100),
    show VARCHAR(100),
    js VARCHAR(150),
    pokemon VARCHAR(50),
    emojigram VARCHAR(30)
);


INSERT INTO users(name, cohort_id, image_prof, image_party, quote, emoji, tea_coffee, hogwarts, cuisine, fruit, snack, show, js, pokemon, emojigram) VALUES 
('Ayub',1,'URLHERE', 'URLHERE', '"Alright, boss!"', '👀', 'No caffeine', 'Slytherin', 'Rice and chicken', 'Pineapple', 'Fizzy laces', 'Vikings', 'Reduce', 'Charizard', '👀👀👀👀👀'),
('Gillian',1,'URLHERE', 'URLHERE', '""', '', 'Tea', 'Ravenclaw', 'Pub Food', 'Satsuma', 'Pickled Onion Monster Munch', 'Peep Show', 'setTimeout', 'Snorlax', '👊🐼'),
('Nikke',1,'URLHERE', 'URLHERE', '"Unlimited Graph Paper!"', '🤓', 'Tea', 'Ravenclaw', 'Duck and rice', 'Mangosteen', 'Chocolate Raisins', 'Fleabag', '"Why is everything an object?!"', 'Pikachu', ''),
('Rosa',1,'URLHERE', 'URLHERE', '"Bruhhh"', '😍', 'Coffee', 'Hufflepuff', 'Yemeni', 'Nectarine', 'Lotus Biscuit Spread', 'Fleabag', 'Sorting Hat Function', 'Togepi', ''),
('Reda',1,'URLHERE', 'URLHERE', '"Thats really great!"', '🤦🏾‍♀️', 'Coffee', 'Ravenclaw', 'Vietnamese', 'Pomelo', 'Peanut M&Ms', 'The West Wing', 'RegEx', 'Jigglypuff', '🤪💕😂💃🧝‍♀️');


COMMIT; 