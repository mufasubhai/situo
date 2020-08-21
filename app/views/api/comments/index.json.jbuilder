@projects.each do |project|
    json.set! project.id do
        json.partial! "api/comments/comment", project: project

    end
end