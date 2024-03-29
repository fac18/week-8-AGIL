BEGIN;

DROP TABLE IF EXISTS users, cohorts CASCADE;

CREATE TABLE cohorts (
    cohort_id SERIAL PRIMARY KEY,
    cohort_name VARCHAR(6)
);

INSERT INTO cohorts (cohort_name) VALUES
('FAC 18');

CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    user_name VARCHAR(100) NOT NULL,
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


INSERT INTO users (user_name, cohort_id, image_prof, image_party, quote, emoji, tea_coffee, hogwarts, cuisine, fruit, snack, show, js, pokemon, emojigram) VALUES 
('Ayub',1,'https://imgur.com/YRvPBum.jpg', 'https://imgur.com/01UUNru.jpg', '"Alright, boss!"', '👀', 'No caffeine', 'Slytherin', 'Rice and chicken', 'Pineapple', 'Fizzy laces', 'Vikings', 'Reduce', 'Charizard', '👀👀👀👀👀'),
('Gillian',1,'https://imgur.com/poIIAAj.jpg', 'https://imgur.com/tJeRoSc.jpg', '"Thats wild!"', '', 'Tea', 'Ravenclaw', 'Pub Food', 'Satsuma', 'Pickled Onion Monster Munch', 'Peep Show', 'setTimeout', 'Snorlax', '👊🐼'),
('Nikke',1,'https://imgur.com/GeHdEeC.jpg', 'https://imgur.com/uQBYZHj.jpg', '"Unlimited Graph Paper!"', '🤓', 'Tea', 'Ravenclaw', 'Duck and rice', 'Mangosteen', 'Chocolate Raisins', 'Fleabag', '"Why is everything an object?!"', 'Pikachu', ''),
('Rosa',1,'https://imgur.com/912CuwX.jpg', 'https://imgur.com/VzQcMw5.jpg', '"Bruhhh"', '😍', 'Coffee', 'Hufflepuff', 'Yemeni', 'Nectarine', 'Lotus Biscuit Spread', 'Fleabag', 'Sorting Hat Function', 'Togepi', ''),
('Reda',1,'https://imgur.com/YOderk2.jpg', 'https://imgur.com/IQQz6Qt.jpg', '"Thats really great!"', '🤦🏾‍♀️', 'Coffee', 'Ravenclaw', 'Vietnamese', 'Pomelo', 'Peanut M&Ms', 'The West Wing', 'RegEx', 'Jigglypuff', '🤪💕😂💃🧝‍♀️');


COMMIT; 