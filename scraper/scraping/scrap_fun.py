import requests
from lxml import html
from urllib.parse import urljoin

def get_links(url, xpath_links):
    status, tree = get_tree(url)
    if status:
        links=tree.xpath(xpath_links)
        
        return list(set(links))

    else:
        return []

def create_url(url_home,links):
    news_urls = [ ]
    for link in links:
        news_urls.append(urljoin(url_home,link))

    return news_urls


def get_tree(url):
    try:
        pageContent = requests.get(url)
        if pageContent.status_code ==200:
            tree=html.fromstring(pageContent.content.decode("utf-8"))
            print(f"Ok  Tree from: {url}")
            return True, tree
        else:
            print(f"Error Scrapping URL {url} \n")
            print(f"Status Code = {pageContent.status_code}")
            return False, None
    except Exception as e:
        print(f"Error Scrapping URL: {url} \n")
        print(e)
        return False, None


