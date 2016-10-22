defmodule Disingenuous.PageController do
  use Disingenuous.Web, :controller

  def index(conn, _params) do
    render conn, "index.html", page_title: "Home page"
  end
end
