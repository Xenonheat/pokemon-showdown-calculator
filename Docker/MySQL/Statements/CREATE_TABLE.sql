CREATE TABLE pokemon (
  guid varchar(50),
  Name varchar(50),
  PrimaryType varchar(15),
  SecondaryType varchar(15),
  Weight decimal(10),
  Height decimal(10),
  EggGroup1 varchar(30),
  EggGroup2 varchar(30)
)

CREATE TABLE move (
  guid varchar(50),
  Name varchar(50),
  Category varchar(20),
  Type varchar(15),
  Damage varchar(10),
  Effect text,
  Accuracy int(3),
  EffectAccuracy int(3),
  Xtimestamp timestamp()
)

CREATE TABLE egg_group (
  guid varchar(50),
  Name varchar(50),
  Xtimestamp timestamp()
)

CREATE TABLE pokemon_to_pokemon_stats (
  Xid varchar(50),
  pokemon_guid varchar(50),
  HP int(5),
  Attack int(5),
  Defense int(5),
  SpecialAttack int(5),
  SpecialDefense int(5),
  Speed int(5),
  Total int(10),
  Xcreated timestamp()
)

CREATE TABLE pokemon_to_pokemon_moves (
  Xid varchar(50),
  pokemon_guid varchar(50),
  move_guid varchar(50),
  Xcreated timestamp()
)

CREATE TABLE pokemon_to_pokemon_egg_groups (
  Xid varchar(50),
  pokemon_guid varchar(50),
  egg_group_guid varchar(50),
  Xtimestamp timestamp()
)
