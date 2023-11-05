CREATE TABLE article(
    article_id SERIAL UNIQUE NOT NULL PRIMARY KEY,
    aboveimg text[],
    middleimg text[],
    bellowimg text[],
    p1 text,
    p2 text,
    p3 text
);

INSERT INTO article(middleimg, p1, p2) VALUES 
('{/images/1.jpg, Montreaux 2023}', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quae, laudantium ad magnam, delectus omnis tempore mollitia fuga ducimus ab consectetur cumque illum facere iusto. Assumenda beatae nobis dolorum cupiditate?','Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit accusantium iste repellendus ipsam aliquam, at eum ex pariatur, tenetur qui corrupti dolorum veniam minima explicabo consectetur dolorem expedita rem iusto.');