CREATE TABLE `paste`.`memos`
( `id` BIGINT NOT NULL AUTO_INCREMENT COMMENT 'ID' , `content` VARCHAR NOT NULL COMMENT '内容' , `create_time` BIGINT NOT NULL COMMENT '创建时间' , `update_time` BIGINT NOT NULL COMMENT '更新时间' , `uuid` INT NOT NULL , PRIMARY KEY
(`id`)) ENGINE = InnoDB;