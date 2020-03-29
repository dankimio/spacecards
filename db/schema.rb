# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_03_29_144522) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "reviews", force: :cascade do |t|
    t.bigint "study_session_id", null: false
    t.bigint "user_card_id", null: false
    t.integer "answer"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["study_session_id", "user_card_id"], name: "index_reviews_on_study_session_id_and_user_card_id", unique: true
    t.index ["study_session_id"], name: "index_reviews_on_study_session_id"
    t.index ["user_card_id"], name: "index_reviews_on_user_card_id"
  end

  create_table "shared_cards", force: :cascade do |t|
    t.bigint "shared_deck_id", null: false
    t.text "front", null: false
    t.text "back", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["shared_deck_id"], name: "index_shared_cards_on_shared_deck_id"
  end

  create_table "shared_decks", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.string "name", null: false
    t.integer "shared_cards_count", default: 0
    t.boolean "public", default: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.text "description"
    t.index ["user_id"], name: "index_shared_decks_on_user_id"
  end

  create_table "study_sessions", force: :cascade do |t|
    t.bigint "user_deck_id", null: false
    t.integer "new_cards_limit", null: false
    t.integer "due_cards_limit", null: false
    t.boolean "completed", default: false, null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_deck_id"], name: "index_study_sessions_on_user_deck_id"
  end

  create_table "user_cards", force: :cascade do |t|
    t.bigint "user_deck_id", null: false
    t.bigint "shared_card_id"
    t.text "front", null: false
    t.text "back", null: false
    t.float "easiness_factor", default: 2.5, null: false
    t.integer "repetitions", default: 0, null: false
    t.datetime "due_at"
    t.datetime "recalled_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "interval", default: 0, null: false
    t.index ["shared_card_id"], name: "index_user_cards_on_shared_card_id"
    t.index ["user_deck_id"], name: "index_user_cards_on_user_deck_id"
  end

  create_table "user_decks", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "shared_deck_id"
    t.string "name", null: false
    t.integer "user_cards_count", default: 0
    t.integer "new_cards_per_day", default: 20
    t.integer "reviews_per_day", default: 20
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.text "description"
    t.index ["shared_deck_id"], name: "index_user_decks_on_shared_deck_id"
    t.index ["user_id"], name: "index_user_decks_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  add_foreign_key "reviews", "study_sessions"
  add_foreign_key "reviews", "user_cards"
  add_foreign_key "shared_cards", "shared_decks"
  add_foreign_key "shared_decks", "users"
  add_foreign_key "study_sessions", "user_decks"
  add_foreign_key "user_cards", "shared_cards"
  add_foreign_key "user_cards", "user_decks"
  add_foreign_key "user_decks", "shared_decks"
  add_foreign_key "user_decks", "users"
end
