using Microsoft.AspNetCore.Mvc;
using System.Text.Json;
using testapi.Model;

namespace testapi.Controllers
{
    [Route("[controller]")]
    public class PostsController : Controller
    {

        static readonly HttpClient client = new HttpClient();

        [HttpGet]
        public async Task<IActionResult> get(string tag, string sortBy = "id", string direction = "asc")
        {
            try
            {
                HttpResponseMessage response = await client.GetAsync($"https://api.assessment.skillset.technology/a74fsg46d/posts?tag={tag}");
                response.EnsureSuccessStatusCode();
                string responseBody = await response.Content.ReadAsStringAsync();

                Posts? data = JsonSerializer.Deserialize<Posts>(responseBody);

                if (data != null)
                {
                    data.posts = data.posts?.OrderBy(x => x.id).ToList();
                }

                return Ok(data);
            }
            catch (Exception ex)
            {
                return BadRequest($"Erro: {ex.Message}");
            }
        }
    }
}