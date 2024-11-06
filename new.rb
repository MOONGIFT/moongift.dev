require 'json'
require 'open-uri'
require "cgi"

puts "キーを入力"
key = gets.chomp
puts "URLを入力"
url = gets.chomp

if url.empty?
	puts "URLが空です"
	exit
end
if key.empty?
	puts "キーが空です"
	exit
end

# 同名のファイルがないか、 _posts 以下をチェック
files = Dir.glob("./_posts/[0-9]{4}-[0-9]{2}-[0-9]{2}-#{key.downcase.gsub(/\s+/, '-')}.md")
if files.size > 0
	puts "同名のファイルが存在します"
	puts files[0]
	exit
end

begin
	json = JSON.parse(URI.open("https://ogp.moongift.dev/?url=#{CGI.escape(url)}").read, symbolize_names: true)
rescue => e
	json = {
		title: key,
	}
end

params = {
	site: json[:title].gsub(/\|/, '\|'),
	title: key,
	lowercase: key.downcase.gsub(/\s+/, '-'),
	url: url,
}

template = open('./template.md').read
params.each do |key, value|
	template.gsub!("_#{key}_", value)
end

date = Time.now.strftime("%Y-%m-%d")

open("./_posts/#{date}-#{params[:lowercase]}.md", "w") do |f|
	f.puts template
end
