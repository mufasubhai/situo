# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  name            :string           not null
#  session_token   :string           not null
#  password_digest :string           not null
#  photo_url       :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#


class User < ApplicationRecord

    attr_reader :password

  validates :email, :password_digest, :session_token, :name, presence: true
  validates :email, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true


  after_initialize :ensure_session_token, :ensure_user_photo


  has_one_attached :photo

    
    has_many(
      :projects,
      class_name: 'Project',
      foreign_key: :owner_id,
      primary_key: :id
    )

    has_many(
      :created_tasks,
      class_name: 'Task',
      foreign_key: :creator_id,
      primary_key: :id
    )
    
     has_many(
        :users_projects,
        class_name: 'UsersProject',
        foreign_key: :user_id,
        primary_key: :id
    )

    has_many(
      :comments,
      class_name: 'Comment',
      foreign_key: :author_id,
      primary_key: :id
    )    
    
  has_many :projects, through: :users_projects, source: :project


  def ensure_user_photo
    file = File.open('app/assets/images/userdefault.png')

    if !self.photo.attached? 
      self.photo.attach(io: file, filename: 'userdefault.png')
    end
  end

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    generate_unique_session_token
    save!
    self.session_token
  end

  private

  def ensure_session_token
    generate_unique_session_token unless self.session_token
  end

  def new_session_token
    SecureRandom.urlsafe_base64
  end

  def generate_unique_session_token
    self.session_token = new_session_token
    while User.find_by(session_token: self.session_token)
      self.session_token = new_session_token
    end
    self.session_token
  end

end
