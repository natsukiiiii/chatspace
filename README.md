## membersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true, index: true|
|group_id|integer|null: false, foreign_key: true, index: true|

### Association
- belongs_to :group
- belongs_to :user


## userテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false, foreign_key: true|

### Association
- has_many : groups, through: :members
- has_many : message
- has_many : members



## groupテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false, foreign_key: true|

### Association
- has_many : users, through: :members
- has_many : messsage
- has_many : members

## messageテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true, index: true|
|group_id|integer|null: false, foreign_key: true, index: true|
|body|text|foreign_key: true|
|image|string|foreign_key: true|


### Association
- has_many : member
- has_many : group
- has_many : user
