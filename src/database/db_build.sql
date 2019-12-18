BEGIN;

DROP TABLE IF EXISTS users, cohorts status CASCADE;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    cohort_id INTEGER REFERENCES cohorts(id),
    image_prof VARCHAR(400),
    image_party VARCHAR(400),
    quote VARCHAR(100) NOT NULL,
     tea_coffee VARCHAR(6),
    hogwarts VARCHAR(15)
    cuisine VARCHAR(100),
    fruit VARCHAR(50),
    snack VARCHAR(100),
    show VARCHAR(100),
    js VARCHAR(150),
    pokemon VARCHAR(50),
    emojigram VARCHAR(30)
);

CREATE TABLE cohorts (
    id SERIAL PRIMARY KEY,
    name VARCHAR(6)
);

'INSERT INTO users(name,cohort_id,image_prof,image_party,quote,emoji,tea_coffee,hogwarts,cuisine,fruit,snack,show,js,pokemon, emojigram) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15)',
('Ayub','FAC 18','URLHERE', 'URLHERE', '"Alright, boss!"', '👀', 'No caffeine', 'Slytherin', 'Rice and chicken', 'Pineapple', 'Fizzy laces', 'Vikings', 'Reduce', 'Charizard', '👀👀👀👀👀'),
('Gillian','FAC 18','URLHERE', 'URLHERE', '""', '', 'Tea', 'Ravenclaw', 'Pub Food', 'Satsuma', 'Pickled Onion Monster Munch', 'Peep Show', 'setTimeout', 'Snorlax', '👊🐼'),
('Nikke','FAC 18','URLHERE', 'URLHERE', '"Unlimited Graph Paper!"', '🤓', 'Tea', 'Ravenclaw', 'Duck and rice', 'Mangosteen', 'Chocolate Raisins', 'Fleabag', '"Why is everything an object?!"', 'Pikachu', ''),
('Rosa','FAC 18','URLHERE', 'URLHERE', '"Bruhhh"', '😍', 'Coffee', 'Hufflepuff', 'Yemeni', 'Nectarine', 'Lotus Biscuit Spread', 'Fleabag', 'Sorting Hat Function', 'Togepi', ''),
('Reda','FAC 18','URLHERE', 'URLHERE', '"That\'s really great!"', '🤦🏾‍♀️', 'Coffee', 'Ravenclaw', 'Vietnamese', 'Pomelo', 'Peanut M&Ms', 'The West Wing', 'RegEx', 'Jigglypuff', '🤪💕😂💃🧝‍♀️');


COMMIT; 