
namespace testapi.Model
{
    public class Post
    {
        public Post() { }
        public int id { get; set; }
        public string? author { get; set; }
        public int authorId { get; set; }
        public int likes { get; set; }
        public float popularity { get; set; }
        public int reads { get; set; }
        public List<string>? tags { get; set; }
    }
}