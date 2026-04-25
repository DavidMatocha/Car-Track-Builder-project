# 💻 Praktická maturita – kompletní tahák (vysvětlení + příklady)

---

# 6️⃣ ZÁKLADY PROGRAMOVÁNÍ

## 🧠 Co to je?
Základní stavební kameny programování – bez toho neuděláš žádnou aplikaci.

---

## 📦 Datové typy
👉 určují, jaký typ hodnoty proměnná obsahuje

- `int` → celé číslo
- `double` → desetinné číslo
- `string` → text
- `bool` → pravda/nepravda

```csharp
int vek = 18;
string jmeno = "Petr";
🔁 Vstup a výstup

👉 komunikace s uživatelem

Console.WriteLine("Zadej jméno:");
string jmeno = Console.ReadLine();
🔄 Podmínky

👉 rozhodování programu

if (vek >= 18)
{
    Console.WriteLine("Dospělý");
}
else
{
    Console.WriteLine("Dítě");
}
🔁 Cykly

👉 opakování kódu

for (int i = 0; i < 5; i++) { }

while (true) { }

foreach (var item in list) { }
📊 Funkce (metody)

👉 opakovatelný blok kódu

int Soucet(int a, int b)
{
    return a + b;
}
📦 Pole a seznamy

👉 ukládání více hodnot

int[] pole = {1,2,3};

List<int> list = new List<int>();
list.Add(10);
🔄 Konverze typů

👉 převod mezi typy

int cislo = int.Parse("10");
string text = cislo.ToString();
7️⃣ OOP (OBJEKTOVÉ PROGRAMOVÁNÍ)
🧠 Co to je?

Styl programování, kde vše je objekt (reálný svět → program).

🧱 Třída a objekt

👉 šablona a konkrétní instance

class Auto
{
    public string Barva;

    public void Jizda()
    {
        Console.WriteLine("Jedu");
    }
}
🏗 Konstruktor

👉 spustí se při vytvoření objektu

public Auto(string barva)
{
    Barva = barva;
}
🔒 Zapouzdření

👉 ochrana dat

private int rychlost;
public int Rychlost { get; set; }
🧬 Dědičnost

👉 jedna třída přebírá vlastnosti jiné

class Zvire { }

class Pes : Zvire { }
🔁 Polymorfismus

👉 stejná metoda, jiný výsledek

🔌 Rozhraní

👉 pravidla, co musí třída splnit

interface ILetani
{
    void Let();
}
8️⃣ WINDOWS FORMS (GUI)
🧠 Co to je?

Grafické aplikace (okna, tlačítka).

🧱 Komponenty
TextBox → vstup
Label → text
Button → akce
ListBox → seznam
ComboBox → výběr
🖱 Události

👉 co se stane po kliknutí

private void button1_Click(object sender, EventArgs e)
{
    MessageBox.Show("Klik");
}
📥 Získání dat
string text = textBox1.Text;
✔ Validace

👉 kontrola správnosti

if (textBox1.Text == "")
{
    MessageBox.Show("Vyplň pole");
}
9️⃣ PRÁCE S DATY (SOUBORY + DB)
🧠 Co to je?

Ukládání a načítání dat.

📄 CSV soubor – čtení

👉 načítání dat ze souboru

var lines = File.ReadAllLines("data.csv");

foreach (var line in lines)
{
    var parts = line.Split(';');
}
✍️ Zápis do souboru
File.AppendAllText("data.csv", "1;Petr\n");
⚠️ Výjimky

👉 ochrana proti pádu programu

try
{
}
catch (Exception ex)
{
    Console.WriteLine(ex.Message);
}
🗄 SQL databáze

👉 ukládání dat do tabulek

SELECT → čtení
INSERT → přidání
UPDATE → změna
DELETE → smazání
🔟 GDI+ (GRAFIKA)
🧠 Co to je?

Kreslení v aplikaci (grafy, obrazce).

Graphics g = this.CreateGraphics();

g.DrawLine(Pens.Black, 0, 0, 100, 100);
g.DrawRectangle(Pens.Red, 10, 10, 50, 50);

👉 používá se na:

grafy
animace
vizualizace dat
1️⃣1️⃣ WEB V .NET (MVC)
🧠 Co to je?

Webové aplikace (stránky + backend).

📄 Controller

👉 řídí logiku

public IActionResult Index()
{
    return View();
}
🌐 View

👉 HTML stránka

📤 GET / POST
GET → čtení dat
POST → odesílání dat
🗄 Entity Framework

👉 práce s databází jednoduše

db.Users.Add(user);
db.SaveChanges();
🔐 Session

👉 paměť uživatele

HttpContext.Session.SetString("user", "admin");
1️⃣2️⃣ MS-SQL
🧠 Co to je?

Jazyk pro práci s databází.

🧱 Tabulka
CREATE TABLE Uzivatel (
    Id INT PRIMARY KEY,
    Jmeno NVARCHAR(50)
);
🔍 SELECT
SELECT * FROM Uzivatel;
✍️ INSERT / UPDATE / DELETE
INSERT INTO Uzivatel VALUES (1, 'Petr');

UPDATE Uzivatel SET Jmeno='Jan' WHERE Id=1;

DELETE FROM Uzivatel WHERE Id=1;
🔗 JOIN

👉 spojení tabulek

SELECT *
FROM A
JOIN B ON A.Id = B.AId;
1️⃣3️⃣ WEB ZÁKLADY
🧠 Co to je?

Tvorba webů.

🌐 HTML

👉 struktura stránky

<h1>Nadpis</h1>
<p>Text</p>
🎨 CSS

👉 vzhled stránky

body {
    background-color: black;
}
⚡ JavaScript

👉 interaktivita

alert("Ahoj");
📦 DOM

👉 práce s prvky stránky

document.getElementById("id");
💾 LocalStorage

👉 ukládání v prohlížeči

localStorage.setItem("klic", "hodnota");
🚀 CRUD (NEJDŮLEŽITĚJŠÍ!)
🟢 CREATE (vytvořit)
db.Add(obj);
db.SaveChanges();
🔵 READ (číst)
var data = db.Users.ToList();
🟡 UPDATE (upravit)
user.Name = "Nový";
db.SaveChanges();
🔴 DELETE (smazat)
db.Remove(user);
db.SaveChanges();
📄 CSV – jednoduché CRUD
📥 čtení
File.ReadAllLines("data.csv");
➕ přidání
File.AppendAllText("data.csv", "1;Petr\n");
✏️ úprava
načíst → upravit → přepsat celý soubor
❌ smazání
načíst → filtrovat → přepsat