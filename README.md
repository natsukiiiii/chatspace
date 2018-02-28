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
|user_name|string|null: false, foreign_key: true|

### Association
- has_many : member


## groupテーブル

|Column|Type|Options|
|------|----|-------|
|group_name|string|null: false, foreign_key: true|

### Association
- has_many : member

## messageテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true, index: true|
|group_id|integer|null: false, foreign_key: true, index: true|
|body|text|null: false, foreign_key: true|
|image|string|null: false, foreign_key: true|


### Association
- has_many : member
- has_many : group
- has_many : user
