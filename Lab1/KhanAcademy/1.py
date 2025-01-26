import instaloader
import json

def download_comments(post_url, output_file):
    # Создаем объект Instaloader
    loader = instaloader.Instaloader()

    # Получаем пост по ссылке
    post_shortcode = post_url.split("/")[-2]
    post = instaloader.Post.from_shortcode(loader.context, post_shortcode)

    # Сохраняем комментарии в список
    comments = []
    for comment in post.get_comments():
        comments.append({
            "text": comment.text,
            "created_at": comment.created_at_utc.isoformat(),
            "author": comment.owner.username
        })

    # Сортируем комментарии от новых к старым
    sorted_comments = sorted(comments, key=lambda x: x["created_at"], reverse=True)

    # Сохраняем в файл
    with open(output_file, "w", encoding="utf-8") as file:
        json.dump(sorted_comments, file, ensure_ascii=False, indent=4)

    print(f"Комментарии сохранены в файл {output_file}")

# Пример использования
post_url = "https://www.instagram.com/p/DFLYhcIzMVU/"
output_file = "comments.json"
download_comments(post_url, output_file)
