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
