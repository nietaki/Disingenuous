defmodule Disingenuous.PageControllerTest do
  use Disingenuous.ConnCase

  test "GET /", %{conn: conn} do
    conn = get conn, "/"
    assert html_response(conn, 200) =~ "Phoenix docs"
  end
end
