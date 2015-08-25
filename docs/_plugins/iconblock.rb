
module Jekyll
    class IconBlockTag < Liquid::Tag

        def initialize(tag_name, icon_name, tokens)
            super
            @icon_name = icon_name.strip
        end
        
        def render(context)

           "<div class=\"icon-block\">\n" +
               "<label class=\"icon #{@icon_name}\">#{@icon_name}</label>\n" +
               "</div>"
        end
    end
end

Liquid::Template.register_tag('iconblock', Jekyll::IconBlockTag)


